#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
// use std::fs::File;
// use std::io::prelude::*;

#[tauri::command]
fn button03() {
  println!("I was invoked from JS!");
}

// #[tauri::command]
// fn button04() {
//   println!("I was invoked from JS!");
//   let mut file = File::create("foo.txt")?;
//     file.write_all(b"Hello, world!")?;
//     Ok(())
// }


// fn main() -> std::io::Result<()> {
//     let mut file = File::create("foo.txt")?;
//     file.write_all(b"Hello, world!")?;
//     Ok(())
// }


fn main() {
  tauri::Builder::default()
  // This is where you pass in your commands
  .invoke_handler(tauri::generate_handler![button03])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
// fn main() {
//   tauri::Builder::default()
//     .run(tauri::generate_context!())
//     .expect("error while running tauri application");
// }
