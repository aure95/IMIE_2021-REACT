import style from './TaskForm.module.css'

export default function TaskForm(props) {

    const onChange = () => {
        if (props.onChange != undefined) {
            props.onChange();
        }
    }

    return (
        <form className={style.form}>
            {props.formTasks.map((formTask)=> {
                return (
                    <div className={style.form_element}>
                        <label for={formTask.labelName}>{formTask.labelName}</label>
                        <br/>
                        <input type={formTask.type} onChange={onChange()}/>
                        <br/>
                    </div>
                )
            }) }
            <input  className={style.form_element} type="submit" value="send" />
        </form>
    )
}