import Icon from '../UI/Icon';

export default function CommentSubmission() {
  return (
    <>
      <div className="relative flex justify-center items-center">
        <div className="flex-col my-14 md:my-20 flex items-center justify-center">
          <Icon
            src="/icon/complete.png"
            alt="코멘트 작성 완료"
            className="icon w-12 lg:w-16 mb-12"
          />
          <p className="text-center text-lg lg:text-2xl">
            코멘트 작성이 완료되었어요.
          </p>
          <div className="w-full mt-16 mb:mt-20 space-y-6 mb:space-y-4 flex flex-col">
            <button className="btn btn-strong-black rounded-full">
              내가 쓴 코멘트 보기
            </button>
            <button className="btn btn-white rounded-full">메인화면</button>
          </div>
        </div>
      </div>
    </>
  );
}
