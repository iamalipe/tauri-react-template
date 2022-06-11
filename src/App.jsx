import logo from "./assets/logo.svg";
import useWindowSize from "./hooks/useWindowSize";
import { invoke } from "@tauri-apps/api/tauri";
import { sendNotification } from "@tauri-apps/api/notification";
import { ask } from "@tauri-apps/api/dialog";
import { createDir } from "@tauri-apps/api/fs";
import { pictureDir } from "@tauri-apps/api/path";

function App() {
  const size = useWindowSize();
  // const TAURI = window.__TAURI__;

  const btn01 = async () => {
    // console.log(TAURI);
    // console.log(TAURI.notification);
    // console.log(await TAURI.notification.isPermissionGranted());
    // console.log(await TAURI.notification.requestPermission());
    // TAURI.notification.sendNotification("This is Button 01");
    sendNotification("This is Button 01");
  };
  const btn02 = () => {
    ask("This is Button 02");
  };
  const btn03 = () => {
    invoke("button03");
  };
  const btn04 = async () => {
    const desktop = await pictureDir();
    await createDir(desktop + "tesat");
  };

  return (
    <div className="w-screen h-screen bg-slate-900 text-slate-100 flex justify-center items-center">
      <div className="m-4 p-4">
        <img src={logo} className="h-24" alt="logo" />
        <h1>
          Window H:{size.height} W:{size.width}
        </h1>
      </div>
      <div className="m-4 p-4">
        <button
          onClick={btn01}
          className="m-2 p-2 bg-slate-600 text-slate-100 hover:bg-slate-400"
        >
          Button 1
        </button>
        <button
          onClick={btn02}
          className="m-2 p-2 bg-slate-600 text-slate-100 hover:bg-slate-400"
        >
          Button 2
        </button>
        <button
          onClick={btn03}
          className="m-2 p-2 bg-slate-600 text-slate-100 hover:bg-slate-400"
        >
          Button 3
        </button>
        <button
          onClick={btn04}
          className="m-2 p-2 bg-slate-600 text-slate-100 hover:bg-slate-400"
        >
          Button 4
        </button>
      </div>
    </div>
  );
}

export default App;
