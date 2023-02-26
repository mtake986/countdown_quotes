type Props = {
  speakerName: string | null;
};

const SpeakerName: React.FC<Props> = ({ speakerName }: Props) => {
  return (
    <div className="absolute right-2 bottom-0 flex items-center font-Caveat-Brush">
      <span className="text-md mr-2">-</span>
      <span className="text-sm sm:text-xl">
        {speakerName ? speakerName : "Loading..."}
      </span>
    </div>
  );
};

export default SpeakerName;
