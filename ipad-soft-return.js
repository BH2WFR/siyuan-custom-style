// iPad 软回车按钮（放到窗口左上角顶栏 #toolbar）
// 插在 #barForward 后面（你截图里那个按钮）

(() => {
  const BTN_ID = "snippet-soft-break-btn";

  function insertSoftBreak() {
    const active =
      document.querySelector(".protyle-wysiwyg[contenteditable='true']:focus") ||
      document.activeElement?.closest?.(".protyle-wysiwyg[contenteditable='true']") ||
      document.querySelector(".protyle-wysiwyg[contenteditable='true']");
    if (!active) return;

    const ok = document.queryCommandSupported("insertLineBreak");
    if (ok) {
      document.execCommand("insertLineBreak");
    } else {
      active.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "Enter",
          code: "Enter",
          keyCode: 13,
          which: 13,
          shiftKey: true,
          bubbles: true,
          cancelable: true,
        })
      );
    }
    active.focus();
  }

  function createButton() {
    const btn = document.createElement("button");
    btn.id = BTN_ID;
    btn.className = "ariaLabel toolbar__item";
    btn.type = "button";
    btn.setAttribute("aria-label", "软回车 (Shift+Enter)");
    btn.innerHTML = "↵";

    btn.addEventListener("click", (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      insertSoftBreak();
    });

    return btn;
  }

  // --- 关键：注入逻辑（带“已在正确位置就不动”的判断） ---
  function injectToTopToolbar() {
    const toolbar = document.getElementById("toolbar");
    if (!toolbar) return;

    let btn = document.getElementById(BTN_ID);
    if (!btn) btn = createButton();

    const drag = document.getElementById("drag");
    if (drag && drag.parentElement) {
      // ✅ 已经在 drag 前面，就别动（避免触发无穷 mutation）
      if (drag.previousSibling === btn) return;

      drag.parentElement.insertBefore(btn, drag);
      return;
    }

    // 兜底：插到 toolbar 里第一个“伸缩占位”前（但如果已经在那，也别动）
    const spacer = toolbar.querySelector(".fn__flex-1");
    if (spacer) {
      if (spacer.previousSibling === btn) return;
      toolbar.insertBefore(btn, spacer);
    } else {
      // 最兜底：放末尾（如果已在末尾也别动）
      if (toolbar.lastElementChild === btn) return;
      toolbar.appendChild(btn);
    }
  }

  // --- 关键：节流，避免频繁触发 ---
  let scheduled = false;
  function scheduleInject() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      injectToTopToolbar();
    });
  }

  // 初次注入
  setTimeout(injectToTopToolbar, 800);

  // ✅ 只观察 #toolbar 自己，不观察 document.body
  const waitToolbar = setInterval(() => {
    const toolbar = document.getElementById("toolbar");
    if (!toolbar) return;

    clearInterval(waitToolbar);

    const obs = new MutationObserver(scheduleInject);
    obs.observe(toolbar, { childList: true, subtree: true, attributes: false });

    // 再补一次，防止 toolbar 已经 ready 但 drag 还没出现
    scheduleInject();
  }, 200);
})();
