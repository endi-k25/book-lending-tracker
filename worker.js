export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === '/css/library.css') {
      return new Response(\$(/* ==========================================================================
   REUSABLE CSS UI LIBRARY
   ========================================================================== */
:root {
  --lib-primary: #3b82f6;
  --lib-primary-hover: #2563eb;
  --lib-danger: #ef4444;
  --lib-danger-bg: #fee2e2;
  --lib-danger-text: #991b1b;
  --lib-warning: #f59e0b;
  --lib-warning-bg: #fef3c7;
  --lib-warning-text: #92400e;
  --lib-success: #10b981;
  --lib-success-bg: #d1fae5;
  --lib-success-text: #065f46;
  --lib-bg: #f8fafc;
  --lib-card-bg: #ffffff;
  --lib-border: #e2e8f0;
  --lib-text-main: #1e293b;
  --lib-text-muted: #64748b;
  --lib-radius: 8px;
  --lib-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --lib-font: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: var(--lib-font); background-color: var(--lib-bg); color: var(--lib-text-main); }

/* Containers & Cards */
.lib-container { max-width: 1000px; margin: 0 auto; padding: 24px; display: flex; flex-direction: column; gap: 24px; }
.lib-card { background: var(--lib-card-bg); border: 1px solid var(--lib-border); border-radius: var(--lib-radius); padding: 20px; box-shadow: var(--lib-shadow); }

/* Form Components */
.lib-form-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 16px; }
.lib-form-group { display: flex; flex-direction: column; gap: 6px; }
.lib-label { font-size: 0.875rem; font-weight: 600; }
.lib-input, .lib-select { padding: 10px 12px; border: 1px solid var(--lib-border); border-radius: var(--lib-radius); font-size: 0.95rem; outline: none; background: #fff; font-family: inherit; }
.lib-input:focus, .lib-select:focus { border-color: var(--lib-primary); box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15); }
.lib-input.lib-is-invalid, .lib-select.lib-is-invalid { border-color: var(--lib-danger); background-color: #fff5f5; }
.lib-error-message { font-size: 0.75rem; color: var(--lib-danger); min-height: 16px; font-weight: 500; }

/* Buttons */
.lib-btn { display: inline-flex; align-items: center; justify-content: center; padding: 10px 18px; border: none; border-radius: var(--lib-radius); font-weight: 600; cursor: pointer; transition: 0.2s; font-family: inherit; }
.lib-btn--primary { background: var(--lib-primary); color: #fff; }
.lib-btn--primary:hover { background: var(--lib-primary-hover); }
.lib-btn--danger-sm { background: var(--lib-danger); color: #fff; padding: 6px 12px; font-size: 0.8rem; }
.lib-btn--secondary-sm { background: var(--lib-border); color: var(--lib-text-main); padding: 6px 12px; font-size: 0.8rem; margin-right: 6px; }

/* Table Component */
.lib-table-wrapper { overflow-x: auto; }
.lib-table { width: 100%; border-collapse: collapse; text-align: left; }
.lib-table th, .lib-table td { padding: 12px 14px; border-bottom: 1px solid var(--lib-border); font-size: 0.9rem; }
.lib-table th { background: #f1f5f9; color: var(--lib-text-muted); font-weight: 600; }
.lib-table tr:hover { background: #f8fafc; }

/* Badges */
.lib-badge { display: inline-block; padding: 4px 8px; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; }
.lib-badge--warning { background: var(--lib-warning-bg); color: var(--lib-warning-text); }
.lib-badge--success { background: var(--lib-success-bg); color: var(--lib-success-text); }
.lib-badge--danger { background: var(--lib-danger-bg); color: var(--lib-danger-text); }
.Replace('', '\').Replace('$', '\$'))\, {
        headers: { 'Content-Type': 'text/css; charset=utf-8' }
      });
    }

    if (path === '/css/styles.css') {
      return new Response(\$(/* Page-Specific Styles (builds on css/library.css) */
.page-header h1 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--lib-text-main);
}

.page-header p {
  color: var(--lib-text-muted);
  margin-top: 4px;
}

.summary-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.metric-card {
  padding: 16px;
  border-radius: var(--lib-radius);
  border: 1px solid var(--lib-border);
  background: var(--lib-card-bg);
}

.metric-title {
  font-size: 0.85rem;
  color: var(--lib-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.metric-value {
  font-size: 2rem;
  font-weight: 700;
  margin-top: 8px;
}

.metric-card--primary .metric-value { color: var(--lib-primary); }
.metric-card--danger .metric-value { color: var(--lib-danger); }
.Replace('', '\').Replace('$', '\$'))\, {
        headers: { 'Content-Type': 'text/css; charset=utf-8' }
      });
    }

    if (path === '/js/validator.js') {
      return new Response(\$(/* ==========================================================================
   REUSABLE FORM VALIDATION LIBRARY
   Validates fields and updates custom error messages beside/below inputs.
   ========================================================================== */
const FormValidator = (() => {
  const setFieldError = (fieldId, errorMsg) => {
    const inputEl = document.getElementById(fieldId);
    const errorEl = document.getElementById(`${fieldId}-error`);
    if (!inputEl || !errorEl) return;

    if (errorMsg) {
      inputEl.classList.add("lib-is-invalid");
      errorEl.textContent = errorMsg;
    } else {
      inputEl.classList.remove("lib-is-invalid");
      errorEl.textContent = "";
    }
  };

  const validate = (formData, rules) => {
    let isValid = true;
    for (const [field, ruleFn] of Object.entries(rules)) {
      const val = formData[field] || "";
      const errorMsg = ruleFn(val);
      setFieldError(field, errorMsg);
      if (errorMsg) isValid = false;
    }
    return isValid;
  };

  const bindRealtimeValidation = (rules) => {
    Object.keys(rules).forEach((fieldId) => {
      const el = document.getElementById(fieldId);
      if (el) {
        el.addEventListener("input", () => {
          const errorMsg = rules[fieldId](el.value);
          setFieldError(fieldId, errorMsg);
        });
      }
    });
  };

  return {
    validate,
    setFieldError,
    bindRealtimeValidation,
  };
})();
.Replace('', '\').Replace('$', '\$'))\, {
        headers: { 'Content-Type': 'application/javascript; charset=utf-8' }
      });
    }

    if (path === '/js/app.js') {
      return new Response(\$(/* ==========================================================================
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
.Replace('', '\').Replace('$', '\$'))\, {
        headers: { 'Content-Type': 'application/javascript; charset=utf-8' }
      });
    }

    return new Response(\$(<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Book Lending Tracker</title>
  <!-- CSS Library first, then Application Layout -->
  <link rel="stylesheet" href="css/library.css">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div class="lib-container">
    <!-- Header -->
    <header class="page-header">
      <h1>Book Lending Tracker</h1>
      <p>Manage borrowed library books, track return deadlines, and monitor overdue loans.</p>
    </header>

    <!-- Summary Area -->
    <section class="summary-metrics">
      <div class="metric-card metric-card--primary">
        <div class="metric-title">Total Loans</div>
        <div id="total-loans" class="metric-value">0</div>
      </div>
      <div class="metric-card metric-card--danger">
        <div class="metric-title">Overdue Loans</div>
        <div id="overdue-loans" class="metric-value">0</div>
      </div>
    </section>

    <!-- Loan Entry Form -->
    <section class="lib-card">
      <form id="loan-form" novalidate>
        <div class="lib-form-grid">
          <!-- Title (Required) -->
          <div class="lib-form-group">
            <label class="lib-label" for="title">Title *</label>
            <input class="lib-input" type="text" id="title" placeholder="e.g. Clean Code">
            <span id="title-error" class="lib-error-message"></span>
          </div>

          <!-- Author -->
          <div class="lib-form-group">
            <label class="lib-label" for="author">Author *</label>
            <input class="lib-input" type="text" id="author" placeholder="e.g. Robert C. Martin">
            <span id="author-error" class="lib-error-message"></span>
          </div>

          <!-- Borrower (Required Text) -->
          <div class="lib-form-group">
            <label class="lib-label" for="borrower">Borrower *</label>
            <input class="lib-input" type="text" id="borrower" placeholder="e.g. John Doe">
            <span id="borrower-error" class="lib-error-message"></span>
          </div>

          <!-- Due Date -->
          <div class="lib-form-group">
            <label class="lib-label" for="dueDate">Due Date *</label>
            <input class="lib-input" type="date" id="dueDate">
            <span id="dueDate-error" class="lib-error-message"></span>
          </div>

          <!-- Genre -->
          <div class="lib-form-group">
            <label class="lib-label" for="genre">Genre *</label>
            <select class="lib-select" id="genre">
              <option value="">Select genre</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Technology">Technology</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
            </select>
            <span id="genre-error" class="lib-error-message"></span>
          </div>

          <!-- Status -->
          <div class="lib-form-group">
            <label class="lib-label" for="status">Status</label>
            <select class="lib-select" id="status">
              <option value="Borrowed">Borrowed</option>
              <option value="Returned">Returned</option>
            </select>
          </div>
        </div>
        <button type="submit" class="lib-btn lib-btn--primary">Add Loan Record</button>
      </form>
    </section>

    <!-- Loans Table -->
    <section class="lib-card">
      <div class="lib-table-wrapper">
        <table class="lib-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Borrower</th>
              <th>Due Date</th>
              <th>Genre</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="loans-table-body"></tbody>
        </table>
      </div>
    </section>
  </div>

  <!-- Reusable JS Validation Library, then Application Logic -->
  <script src="js/validator.js"></script>
  <script src="js/app.js"></script>
</body>
</html>
.Replace('', '\').Replace('$', '\$'))\, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }
};
