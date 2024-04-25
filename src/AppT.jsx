import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const AppT = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'This is my first task!',
			date: '15/04/2024',
		},
		{
			id: nanoid(),
			text: 'This is my second task!',
			date: '21/04/2024',
		},
		{
			id: nanoid(),
			text: 'This is my third task!',
			date: '23/04/2024',
		},
		{
			id: nanoid(),
			text: 'This is my new task!',
			date: '24/04/2024',
		},
	]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className={`${darkMode == true?'nf':'tofit'}`} >
				<div className='container'>
					<Header handleToggleDarkMode={setDarkMode} />
					<Search handleSearchNote={setSearchText} />
					<NotesList
						notes={notes.filter((note) =>
							note.text.toLowerCase().includes(searchText)
						)}
						handleAddNote={addNote}
						handleDeleteNote={deleteNote}
					/>
				</div>
			</div>
		</div>
	);
};

export default AppT;