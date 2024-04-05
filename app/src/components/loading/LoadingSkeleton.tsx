export default function LoadingSkeleton() {
  return (
    <div className="flex justify-center items-center h-[65vh]">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
