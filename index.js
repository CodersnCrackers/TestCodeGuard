function updateLineNumbers() {
      const lines = codeInput.value.split('\n').length;
      lineNumbers.innerHTML = Array.from({ length: lines }, (_, i) =>
        `<span>${i + 1}</span>`
      ).join('');
    }

    function updateCharCount() {
      charCount.textContent = `${codeInput.value.length} chars`;
    }

    codeInput.addEventListener('input', () => {
      updateLineNumbers();
      updateCharCount();
    });

    codeInput.addEventListener('keydown', e => {
      // Tab key → insert 2 spaces
      if (e.key === 'Tab') {
        e.preventDefault();
        const { selectionStart, selectionEnd } = codeInput;
        codeInput.value =
          codeInput.value.substring(0, selectionStart) + '  ' +
          codeInput.value.substring(selectionEnd);
        codeInput.selectionStart = codeInput.selectionEnd = selectionStart + 2;
        updateLineNumbers();
      }
    });
