import NoteList from '@/components/features/NoteList';

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">My Notes</h1>
      <NoteList />
    </div>
  );
};

export default HomePage;
