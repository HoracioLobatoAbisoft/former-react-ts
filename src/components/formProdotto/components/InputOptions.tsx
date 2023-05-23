import { BsInfoCircleFill } from 'react-icons/bs'
import { optionsData } from '../data/options';

interface Props {
  label: string;
}
interface ItemOptionProps {
  label: string;

}
export const InputOptions = ({ label }: Props) => {
  return (
    <div className="flex space-x-4 items-start pl-1 ">
      <h2 className=" text-base min-w-[120px]">{label} </h2>
      <div>
        {
          optionsData.map(({ id, title }) => (
            <ItemOptions key={id} label={title} />
          ))
        }
      </div>
    </div>
  )
}

const ItemOptions = ({ label }: ItemOptionProps) => {
  return (
    <div className="flex space-x-4 items-center py-[2px]">
      <div className="bg-gray-200 py-2 px-4 w-48 md:w-[380px]">
        <span className="py-2">{label} </span>
      </div>
      <span className="text-sm text-gray-800">
        <BsInfoCircleFill />
      </span>
    </div>
  )
}
