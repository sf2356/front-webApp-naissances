import type { Declaration } from '@/types_data/Declaration';
import { getStatusColor, getStatusTextFrench } from '@/Utils/Actions';
import { formDate } from '@/Utils/Date';
import ActionButton from '../shared/ActionButton';
import StatusBar from '../shared/StatusBar';

type Props={
  declaration: Declaration,
   index: number,
   action:(data:{id:string,status:string})=>void
}

function DeclarationItem({declaration,index,action}:Props) {
  return (
    <div>
      <article
        className={`grid grid-cols-12 align-center p-4 border border-gray-300 ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}  `}
      >
        <span>{formDate(declaration.registered)}</span>
        <span className="col-span-2">
          <span className="mr-2">{declaration.child.firstName}</span>
          <span>{declaration.child.lastName}</span>
        </span>
        <span>{formDate(declaration.child.birthDate || "")}</span>
        <span>{declaration.company.name}</span>
        <span className="col-span-2">
          <span className="mr-2">{declaration.firstParent.firstName}</span>
          <span>{declaration.firstParent.lastName}</span>
        </span>
        <span className="col-span-2">
          <span className="mr-2">{declaration.secondParent.firstName}</span>
          <span>{declaration.secondParent.lastName}</span>
        </span>
        <StatusBar
          status={getStatusColor(declaration.status)}
          label={getStatusTextFrench(declaration.status)}
        />
        <ActionButton
          classes="p-2 col-span-2 flex flex-col ml-4 border-solid "
          label="Action"
          action={action}
          id={`${declaration.id}`}
        />
      </article>
    </div>
  );
}

export default DeclarationItem