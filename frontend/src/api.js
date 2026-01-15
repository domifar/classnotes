//const API_URL = "http://localhost:5204"; // später Backend-URL
//const API_URL = "https://localhost:7185";
const API_URL = "https://classnotesdomi-htfjg8a9dbcph6fq.westeurope-01.azurewebsites.net";

export async function getNotes() {
  const res = await fetch(`${API_URL}/notes`);
  const notes = await res.json();
  console.log("Fetched notes:", notes);
  return notes;
}

export async function addNote(text) {
  const res = await fetch(`${API_URL}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });
  return res.json();
}

export async function deleteNote(id) {
  const res = await fetch(`${API_URL}/notes/${id}`, {
    method: "DELETE",
  });
  if (res.status === 204) return true;
  if (res.ok) return true;
  try {
    const js = await res.json();
    return !!js;
  } catch (e) {
    return false;
  }
}
