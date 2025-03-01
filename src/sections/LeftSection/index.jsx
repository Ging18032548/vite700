import Header from '../Header';
import Nevbar from '../Nevbar';
import Contact from '../Contact';

const LeftSection = () => {
    return (
    <div>
        <div className='sticky top-0 grid grid-rows-[35%_45%_20%] h-[87vh]'>
          <Header />
          <Nevbar />
          <Contact />
        </div>
      </div>

    )
}

export default LeftSection;