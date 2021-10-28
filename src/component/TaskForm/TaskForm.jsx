import style from './TaskForm.module.css'

export default function TaskForm(props) {

    const onChange = (event) => {
        console.log(event)
        if (props.onChange != undefined) {
            props.onChange(event);
        }
    }

    // const onSubmit = () => {
    //     if (props.onSubmit != undefined) {
    //         props.onSubmit();
    //     }
    // }

    return (
        <form className={style.form}>
            {props.formTasks.map((formTask, index)=> {
                return (
                    <div key={index} className={style.form_element}>
                        <label>{formTask.labelName}</label>
                        <br/>
                        <input type={formTask.type} onChange={onChange(this)}/>
                        <br/>
                    </div>
                )
            }) }
            <input  className={style.form_element} type="button" value="add a Task" onClick={()=> props.onClickButtonAddTask()} />
        </form>
    )
}