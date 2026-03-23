import { getStatusTextFrench, STATUS } from '@/Utils/Actions'

type Props = {
    id:string
    classes: string,
    label: string,
    action: (data:{id:string,status:string}) => void
}

function ActionButton(props: Props) {
    const {classes, action,id} = props
  return (
    <select defaultValue="Pick a color" className={`${classes}`} 
    onChange={(event)=>{
    const status=event.target.value
    action({id:id,status:status})
  }
    }
      >
      <option value="">Selectionner</option>
      {STATUS.map((item: string) => (
        <option key={item} value={item}>
          {getStatusTextFrench(item)}
        </option>
      ))}
    </select>
  );
}

export default ActionButton