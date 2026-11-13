/* ==========================================================================
   APPLICATION LOGIC: Book Lending Tracker
   Consumes FormValidator library and manages loans state.
   ========================================================================== */
const App = (() => {
  let loans = [];

  const validationRules = {
    title: (v) => (!v.trim() ? "Title is required." : null),
    author: (v) => (!v.trim() ? "Author name is required." : null),
    borrower: (v) => (!v.trim() ? "Borrower name is required." : null),
    dueDate: (v) => (!v ? "Due date is required." : null),
    genre: (v) => (!v ? "Please select a genre." : null),
  };

  const isOverdue = (dueDate, status) => {
    if (status === "Returned") return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(dueDate) < today;
  };

  const updateSummaryAndTable = () => {
    const total = loans.length;
    const overdue = loans.filter((l) => isOverdue(l.dueDate, l.status)).length;

    const totalEl = document.getElementById("total-loans");
    const overdueEl = document.getElementById("overdue-loans");
    if (totalEl) totalEl.textContent = total;
    if (overdueEl) overdueEl.textContent = overdue;

    const tbody = document.getElementById("loans-table-body");
    if (!tbody) return;

    if (loans.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:20px; color:#64748b;">No loans recorded yet. Add your first loan above.</td></tr>`;
      return;
    }

    tbody.innerHTML = loans
      .map((loan) => {
        const overdue = isOverdue(loan.dueDate, loan.status);
        let badgeClass = loan.status === "Returned" ? "lib-badge--success" : "lib-badge--warning";
        let label = loan.status;

        if (overdue) {
          badgeClass = "lib-badge--danger";
          label = "Overdue";
        }

        return `
          <tr>
            <td><strong>${loan.title}</strong></td>
            <td>${loan.author}</td>
            <td>${loan.borrower}</td>
            <td>${loan.dueDate}</td>
            <td>${loan.genre}</td>
            <td><span class="lib-badge ${badgeClass}">${label}</span></td>
            <td>
              <button class="lib-btn lib-btn--secondary-sm" onclick="App.toggleLoan('${loan.id}')">
                ${loan.status === "Borrowed" ? "Mark Returned" : "Mark Borrowed"}
              </button>
              <button class="lib-btn lib-btn--danger-sm" onclick="App.deleteLoan('${loan.id}')">Delete</button>
            </td>
          </tr>
        `;
      })
      .join("");
  };

  const toggleLoan = (id) => {
    const item = loans.find((l) => l.id === id);
    if (item) {
      item.status = item.status === "Borrowed" ? "Returned" : "Borrowed";
      updateSummaryAndTable();
    }
  };

  const deleteLoan = (id) => {
    loans = loans.filter((l) => l.id !== id);
    updateSummaryAndTable();
  };

  const init = () => {
    const form = document.getElementById("loan-form");
    if (!form) return;

    FormValidator.bindRealtimeValidation(validationRules);

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        borrower: document.getElementById("borrower").value,
        dueDate: document.getElementById("dueDate").value,
        genre: document.getElementById("genre").value,
        status: document.getElementById("status").value,
      };

      if (!FormValidator.validate(data, validationRules)) {
        return;
      }

      loans.push({ id: Date.now().toString(), ...data });
      form.reset();
      updateSummaryAndTable();
    });

    updateSummaryAndTable();
  };

  return { init, toggleLoan, deleteLoan };
})();

document.addEventListener("DOMContentLoaded", App.init);
