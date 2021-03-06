import { useEffect } from 'react';
import Firebase from 'firebase';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Timeline from '../components/timeline';
import useUser from '../hooks/use-user';
import LoggedInUserContext from '../context/logged-in-user';

type Props = {
  authUser?: Firebase.User;
};

export default function Dashboard({ authUser }: Props) {
  const user = useUser(authUser?.uid);

  useEffect(() => {
    document.title = 'Minestagram';
  });

  return (
    <LoggedInUserContext.Provider value={user}>
      <div className="bg-gray-background">
        <Header />
        <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
          <Timeline />
          <Sidebar />
        </div>
      </div>
    </LoggedInUserContext.Provider>
  );
}
