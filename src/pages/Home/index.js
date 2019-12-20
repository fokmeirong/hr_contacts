import React from 'react';
import './home.scss';
import Header from '@/components/Header';
import SearchBarInput from '@/components/SearchBar';
import ContactList from '@/components/ContactList';

const AddPersonTag = () => <span className="menu-add-person"></span>;
const Menu = () => <span className="menu-list"></span>;

class Home extends React.Component {
    render() {

        return (
            <div className='home-page'>
                <Header left={<Menu/>} right={<AddPersonTag/>}>CONTACTS</Header>
                <SearchBarInput/>
                <ContactList/>
            </div>
        );
    }
}

export default Home;