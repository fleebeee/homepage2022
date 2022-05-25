import React from 'react';
import { createRoot } from 'react-dom/client';
import { DataBrowserRouter, Route } from 'react-router-dom';

import Home, { loader as homeLoader } from './routes/Home';
import NewNote, { action as newNoteAction } from './routes/New';
import Note, {
  loader as noteLoader,
  action as noteAction,
} from './routes/Note';

const App = () => (
  <DataBrowserRouter>
    <Route path="/" element={<Home />} loader={homeLoader}>
      <Route path="new" element={<NewNote />} action={newNoteAction} />
      <Route
        path="note/:noteId"
        element={<Note />}
        loader={noteLoader}
        action={noteAction}
        errorElement={<div>Note not found</div>}
      />
    </Route>
  </DataBrowserRouter>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
