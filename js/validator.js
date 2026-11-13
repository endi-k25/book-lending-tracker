/* ==========================================================================
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
