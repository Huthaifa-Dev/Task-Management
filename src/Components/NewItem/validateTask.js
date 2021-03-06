
let errors = {
    title: '',
    tag: '',
    description: '',
    date: ''
};
export const validate = (info, addDesc) => {
    console.log(info);
    const { title, tag, description, date } = info;

    if (!title || title.trim().length === 0) {
        errors.title = 'Title is required!';
    } else {
        errors.title = '';
    }

    if (!tag || tag.trim().length === 0) {
        errors.tag = 'Tag is required!';
    } else {
        errors.tag = '';
    }

    if ((!description || description.trim().length === 0) && addDesc) {
        errors.description = 'Description is required!';
    } else {
        errors.description = '';
    }

    if ((date instanceof Date && isNaN(date)) || date === '') {
        errors.date = 'Date is required';
    } else {
        errors.date = '';
    }

    return errors;
}

export default validate;