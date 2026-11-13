
const BookLendingTrackerLib = (() => {
  let loans = [];

  // Validation rules definition
  const validators = {
    title: (val) => (!val.trim() ? "Title is required." : null),
    borrower: (val) => (!val.trim() ? "Borrower name is required." : null),
    author: (val) => (!val.trim() ? "Author name is required." : null),
    genre: (val) => (!val ? "Please select a genre." : null),
    dueDate: (val) => (!val ? "Due date is required." : null),
  };

  const showFieldError = (fieldId, errorMsg) => {
    const inputEl = document.getElementById(fieldId);
    const errorEl = document.getElementById(`${fieldId}-error`);
    if (!inputEl || !errorEl) return;

    if (errorMsg) {
      inputEl.classList.add("blt-is-invalid");
      errorEl.textContent = errorMsg;
    } else {
      inputEl.classList.remove("blt-is-invalid");
      errorEl.textContent = "";
    }
  };

  const validateForm = (formData) => {
    let isValid = true;
    for (const [field, validate] of Object.entries(validators)) {
      const errorMsg = validate(formData[field] || "");
      showFieldError(field, errorMsg);
      if (errorMsg) isValid = false;
    }
    return isValid;
  };

  const isOverdue = (dueDate, status) => {
    if (status === "Returned") return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const due = new Date(dueDate);
    return due < today;
  };

  const calculateMetrics = () => {
    const totalLoans = loans.length;
    const overdueLoans = loans.filter((l) => isOverdue(l.dueDate, l.status)).length;
    return { totalLoans, overdueLoans };
  };

  const addLoan = (loan) => {
    loans.push({
      id: Date.now().toString(),
      ...loan,
    });
    updateUI();
  };

  const toggleStatus = (id) => {
    const loan = loans.find((l) => l.id === id);
    if (loan) {
      loan.status = loan.status === "Borrowed" ? "Returned" : "Borrowed";
      updateUI();
    }
  };

  const deleteLoan = (id) => {
    loans = loans.filter((l) => l.id !== id);
    updateUI();
  };

  const updateUI = () => {
    // Update summary metrics
    const { totalLoans, overdueLoans } = calculateMetrics();
    document.getElementById("total-loans").textContent = totalLoans;
    document.getElementById("overdue-loans").textContent = overdueLoans;

    // Render table rows
    const tbody = document.getElementById("loans-table-body");
    if (!tbody) return;

    if (loans.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" class="blt-empty-state">No loans recorded yet. Add your first loan above.</td></tr>`;
      return;
    }

    tbody.innerHTML = loans
      .map((loan) => {
        const overdue = isOverdue(loan.dueDate, loan.status);
        let statusBadgeClass = loan.status === "Returned" ? "blt-badge--returned" : "blt-badge--borrowed";
        let statusLabel = loan.status;

        if (overdue) {
          statusBadgeClass = "blt-badge--overdue";
          statusLabel = "Overdue";
        }

        return `
          <tr>
            <td><strong>${loan.title}</strong></td>
            <td>${loan.author}</td>
            <td>${loan.borrower}</td>
            <td>${loan.dueDate}</td>
            <td>${loan.genre}</td>
            <td><span class="blt-badge ${statusBadgeClass}">${statusLabel}</span></td>
            <td>
              <button class="blt-btn blt-btn--toggle-sm" onclick="BookLendingTrackerLib.toggleStatus('${loan.id}')">
                ${loan.status === "Borrowed" ? "Mark Returned" : "Mark Borrowed"}
              </button>
              <button class="blt-btn blt-btn--danger-sm" onclick="BookLendingTrackerLib.deleteLoan('${loan.id}')">
                Delete
              </button>
            </td>
          </tr>
        `;
      })
      .join("");
  };

  const init = () => {
    const form = document.getElementById("loan-form");
    if (!form) return;

    // Real-time error clearing when typing
    Object.keys(validators).forEach((fieldId) => {
      const el = document.getElementById(fieldId);
      if (el) {
        el.addEventListener("input", () => {
          const errorMsg = validators[fieldId](el.value);
          showFieldError(fieldId, errorMsg);
        });
      }
    });

    // Form submit listener
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        borrower: document.getElementById("borrower").value,
        dueDate: document.getElementById("dueDate").value,
        genre: document.getElementById("genre").value,
        status: document.getElementById("status").value,
      };

      if (!validateForm(formData)) {
        return;
      }

      addLoan(formData);
      form.reset();
    });

    updateUI();
  };

  return {
    init,
    toggleStatus,
    deleteLoan,
  };
})();

document.addEventListener("DOMContentLoaded", BookLendingTrackerLib.init);