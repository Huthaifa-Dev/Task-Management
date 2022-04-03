import { useEffect, useState } from "react";
import Tag from "../Items/Tag"
import Button from "../UI/Button"
import styles from './TagForm.module.scss';
const TagForm = props => {
    const defaultState = {
        research: false,
        uidesign: false,
        planning: false,
        uxwriting: false,
        development: false,
        value: ''
    };
    const [active, setActive] = useState(defaultState);

    const onClick = (event) => {
        const clicked = event.target.innerHTML.replace(/\s+/g, '').toLowerCase();
        setActive({
            ...defaultState,
            [clicked]: true,
            value: event.target.innerHTML
        })
    }
    useEffect(() => {
        props.passData(active.value);
    }, [active])
    return (
        <ul className={styles.tags} onClick={onClick}>
            <li><Button className={active.research ? styles.selected : ''}><Tag tag='Research' /></Button></li>
            <li><Button className={active.uidesign ? styles.selected : ''}><Tag tag='UI Design' /></Button></li>
            <li><Button className={active.planning ? styles.selected : ''}><Tag tag='Planning' /></Button></li>
            <li><Button className={active.uxwriting ? styles.selected : ''}><Tag tag='UX Writing' /></Button></li>
            <li><Button className={active.development ? styles.selected : ''}><Tag tag='Development' /></Button></li>
        </ul>


    )
}

export default TagForm;