const CardEvent = ({ title, img, date, content }) => {
  return (
    <div className="flex w-full justify-center md:w-3/12">
      <div className="max-w-sm rounded-lg border-none bg-white drop-shadow-md dark:border-gray-700 dark:bg-gray-800">
        <a href="#">
          <img className="rounded-t-lg" src={img} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <small>
            <i className="bi bi-calendar2-week" /> {date}
          </small>
          <p className=" mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400">
            {content}
          </p>
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-[#EA222B] px-3 py-2 text-center text-sm font-medium text-white"
          >
            Selengkapnya
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
