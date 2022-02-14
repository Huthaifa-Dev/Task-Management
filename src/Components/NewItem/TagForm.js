import Tag from "../Items/Tag"
import Button from "../UI/Button"
import styles from './TagForm.module.scss';
const TagForm = props => {
    return (

        <ul className={styles.tags}>
            <li><Button><Tag tag='Research' /></Button></li>
            <li><Button><Tag tag='UI Design' /></Button></li>
            <li><Button><Tag tag='Planning' /></Button></li>
            <li><Button><Tag tag='UX Writing' /></Button></li>
            <li><Button><Tag tag='Development' /></Button></li>
        </ul>


    )
}

export default TagForm;