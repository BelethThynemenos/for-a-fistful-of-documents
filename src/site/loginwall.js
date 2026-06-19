(function () {
  const PASSWORD = "Taverniere00";
  const KEY = "dg_access";

  if (sessionStorage.getItem(KEY) === "ok") return;

  document.documentElement.style.visibility = "hidden";

  const overlay = document.createElement("div");
  overlay.innerHTML = `
    <div style="
      position:fixed;inset:0;background:#1a1a1a;
      display:flex;align-items:center;justify-content:center;
      font-family:monospace;z-index:99999;
    ">
      <div style="text-align:center;width:300px;">
        <p style="color:#888;font-size:12px;letter-spacing:.08em;margin:0 0 .3rem">FOR A FISTFUL OF COINS/p>
        <p style="color:#e8e8e8;font-size:18px;margin:0 0 1.8rem">accesso riservato</p>
        <input id="dg-pwd" type="password" placeholder="parola chiave"
          style="width:100%;box-sizing:border-box;background:#2a2a2a;border:.5px solid #444;
          border-radius:6px;color:#e8e8e8;font-family:monospace;font-size:14px;
          padding:10px 14px;text-align:center;letter-spacing:.1em;outline:none;margin-bottom:10px;" />
        <button id="dg-btn"
          style="width:100%;background:#2a2a2a;border:.5px solid #555;border-radius:6px;
          color:#ccc;font-family:monospace;font-size:13px;padding:10px;cursor:pointer;">
          entra →
        </button>
        <p id="dg-err" style="color:#c0392b;font-size:12px;margin-top:10px;min-height:16px;"></p>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  document.documentElement.style.visibility = "visible";

  function check() {
    if (document.getElementById("dg-pwd").value === PASSWORD) {
      sessionStorage.setItem(KEY, "ok");
      overlay.remove();
    } else {
      document.getElementById("dg-err").textContent = "parola chiave errata.";
    }
  }

  document.getElementById("dg-btn").addEventListener("click", check);
  document.getElementById("dg-pwd").addEventListener("keydown", e => {
    if (e.key === "Enter") check();
  });
})();