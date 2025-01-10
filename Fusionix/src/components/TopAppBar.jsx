
import { IconBtn } from "./Button";
import Avatar from "./Avatar";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import { LinearProgress } from './Progress'


import { Link, useNavigation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";


import { useToggle } from "../hooks/useToggle";


import { icon } from "../assets";

function TopAppBar() {

    // -useNavigation: Provides navigation state (loading, idle, submitting, etc.)

    const navigation = useNavigation();

    /**
     * use a custom hook to manage the menu's show state.
     * 'showMenu' holds the current state,
     * and 'setShowMenu' is a function to tggel the menu
     */
    const [showMenu, setShowMenu] = useToggle();

    /**
     * check if the current navigation state is 'loading'and if there is no form data associated with the navigation.
     * This condition typically siginifies a normal page load
     * where the page is loading for the first time or is being reloaded without submitting a form.
     */

    const isNormalLoad = navigation.state === 'loading' && !navigation.formData;

  return (
    <header className="relative flex justify-between items-center h-16 px-4">
        <div className="">
            <IconBtn 
            icon='menu'
            title='Menu'
            classes="lg:hidden"
            />

            <Link
             to='/'
             className="min-w-max max-w-max h-[24px] lg:hidden"
            >
                <img src={icon} width={133} height={24} alt="logo" className="" />
            </Link>
        </div>

        <div className="menu-wrapper">
            <IconBtn onClick={setShowMenu} >
                <Avatar name='Azhar' />
            </IconBtn>

            <Menu classes={showMenu ? 'active' : ''}>
                <MenuItem labelText='Log out'/>
            </Menu>
        </div>

       <AnimatePresence>
        {isNormalLoad && <LinearProgress />}
       </AnimatePresence> 
    </header>
  );
};

export default TopAppBar
