
type Props = {
  author: string | null;
};

const Author: React.FC<Props> = ({ author }: Props) => {
  return (
    <div className="absolute right-2 bottom-0 flex items-center font-Caveat-Brush">
      <span className="text-md mr-2">-</span>
      <span className="text-sm sm:text-xl">
        {author ? author : "Loading..."}
      </span>
    </div>
  );
};

export default Author