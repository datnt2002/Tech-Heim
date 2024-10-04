import { Button } from 'antd'
import TextArea from 'antd/es/input/TextArea'

// type Props = {
//   ratingFunction: { key: string; value: number }[];
// };

const CommentInputCard = () => {
  return (
    <div className='flex flex-col gap-6 w-full'>
      <div>Leave your comments here for other customers</div>
      <TextArea
        placeholder='Share your thoughts about this product here'
        className='border-gray-9E9E9E '
        autoSize={{ minRows: 3, maxRows: 4 }}
      />
      <Button className='border-primary text-primary py-[14.5px] px-[107px]'>
        Comment
      </Button>

      {/* <div className="flex flex-col gap-2">
        <div className="font-medium text-base">By feature</div>
        <table className="w-fit">
          {ratingFunction?.map((rating) => (
            <tr>
              <td className="text-sm text-gray-600">{rating.key}</td>
              <td>
                <div className="relative w-32 h-2 bg-gray-300 rounded">
                  <div
                    className="absolute top-0 left-0 h-full bg-orange-500 rounded"
                    style={{ width: `${(rating.value / 5) * 100}%` }}
                  />
                </div>
              </td>
              <th>{rating.value.toFixed(1)}</th>
            </tr>
          ))}
        </table>
      </div> */}
    </div>
  )
}
export default CommentInputCard
