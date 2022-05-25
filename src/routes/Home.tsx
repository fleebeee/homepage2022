import React from 'react';
import styled from 'styled-components';
import { Outlet, useLoaderData, Link } from 'react-router-dom';

import { getNotes } from '../notes';

export async function loader() {
  return getNotes();
}

const Home = () => {
  const notes = useLoaderData();

  return (
    <Container>
      <h1>Notes!</h1>
      <Link to="/new">New Note</Link>
      {notes.map(note => (
        <div key={note.id}>
          <Link to={`/note/${note.id}`}>{note.title}</Link>
        </div>
      ))}
      <Outlet />
    </Container>
  );
};

const Container = styled.div``;

export default Home;
