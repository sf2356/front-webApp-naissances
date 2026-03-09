import { getStatusColor, getStatusTextFrench } from '../Utils/Actions';
import { formDate } from '../Utils/Date';
import { DECLARATIONS } from '../Utils/Declarations';

function DeclarationPage() {
  return (
    <div className='border border-blue'>
      {/* Recuperations des declarations pour affichage  */}
      <article className='grid grid-cols-12 align-center p-4 font-bold'>
            <span>DATE</span>
            <span className='col-span-2'>
              ENFANT
            </span>
            <span>
             DATE NAISSANCE
            </span>
            <span>
             HOPITAL
            </span>
            <span className='col-span-2'>
              PARENT 1
            </span>
            <span className='col-span-2'>
              PARENT 2
            </span>
            <span>STATUS</span>
            <span className='col-span-2'>ACTION</span>
          </article>
      {
        DECLARATIONS.map((declaration,index) => (
          <article key={declaration.id} className={`grid grid-cols-12 align-center p-4 border border-gray-300 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}  `}>
            <span>{formDate(declaration.registered)}</span>
            <span className='col-span-2'>
              <span className='mr-2'>{declaration.child.firstName}</span>
              <span>{declaration.child.lastName}</span>
            </span>
            <span>{formDate(declaration.child.birthDate)}</span>
            <span>{declaration.company.name}</span>
            <span className='col-span-2'>
              <span className='mr-2'>{declaration.firstParent.firstName}</span>
              <span>{declaration.firstParent.lastName}</span>
            </span>
            <span className='col-span-2'>
              <span className='mr-2'>{declaration.secondParent.firstName}</span>
              <span>{declaration.secondParent.lastName}</span>
            </span>
            <span className={`${getStatusColor(declaration.status)}`}>{getStatusTextFrench(declaration.status)}</span>
            <span className='col-span-2'>Action</span>

          </article>
        ))
      }

      </div>
  )
}

export default DeclarationPage