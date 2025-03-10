import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <div>
            <div className='flex items-end gap-4 text-2xl'>
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faGithub} />
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faMedium} />
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faLinkedin} />
          </div>
        </div>
    )
}

export default Contact;