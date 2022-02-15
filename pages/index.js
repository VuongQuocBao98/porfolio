import { RiReactjsLine } from "react-icons/ri";
import { dataSkill } from "../data";
export default function Home() {
  const detailSkill = (dataSkill) => {
    const list = dataSkill.map((data, index) => {
      return (
        <div
          key={index}
          className="col-span-12 md:col-span-6 flex items-center gap-4 mt-2 p-2 border-2 dark:border dark:border-white dark:from-slate-900 dark:to-slate-800 bg-gradient-to-r from-yellow-300 to-pink-300 shadow-lg rounded"
        >
          <data.icon className="text-3xl text-green-500" />
          <div>
            <p>- {data.detail1}</p>
            <p>- {data.detail2}</p>
            {data.detail3 !== "" ? <p>- {data.detail3}</p> : null}
          </div>
        </div>
      );
    });
    return list;
  };
  return (
    <section className="border-2 dark:border-b-0 dark:border-x-0 dark:rounded-none dark:from-slate-900 dark:to-slate-800 bg-gradient-to-r from-white to-white  border-pink-500 rounded mx-2 mt-3">
      <section className="m-4 font-sans leading-6 -tracking-tight">
        <p className="">
          - Studied at Faculty of Information Technology, Ho Chi Minh University
          of Industry
        </p>
        <p>- Từng học lập trình Laravel tại Unitop.vn.</p>
        <p
          dangerouslySetInnerHTML={{
            __html:
              "- Đã từng làm việc tại DataEglobal một khoảng thời gian ngắn tại vị trí frontend (html,css,jquery,laravel).",
          }}
        />
      </section>
      {/* My Skil */}
      <section className="m-4">
        <div className="m-2">
          <h3 className="text-green-400 font-bold">Kỹ Năng</h3>
          <div className="grid grid-cols-12 gap-2">
            {/* <div className="col-span-12 md:col-span-6 flex items-center">
              <RiReactjsLine />
              <div>
                <p></p>
              </div>
            </div> */}
            {detailSkill(dataSkill)}
          </div>
        </div>
      </section>
    </section>
  );
}
