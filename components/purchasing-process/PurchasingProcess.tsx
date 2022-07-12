const PurchasingProcess = () => {
  return (
    <div className="flex justify-center items-center w-full flex-col mt-[-150px]">
      <h1>Købs Processen</h1>
      <div className="grid grid-cols-11 gap-4 mt-10">
        <div>
          <p>hej1</p>
        </div>
        <div className="flex flex-col">
          <p className="">Vælg dine varer</p>
        </div>
        <div>
          <p>Rarrow</p>
        </div>
        <div>
          <p>hej2</p>
        </div>
        <div className="flex flex-col">
          <p className="">Gå til kassen</p>
        </div>
        <div>
          <p>Rarrow</p>
        </div>
        <div>
          <p>hej3</p>
        </div>
        <div className="flex flex-col">
          <p className="">Betal</p>
        </div>
        <div>
          <p>Rarrow</p>
        </div>
        <div>
          <p>hej4</p>
        </div>
        <div className="flex flex-col">
          <p className="">Afhent dine varer i butikken</p>
        </div>
      </div>
    </div>
  );
};

export default PurchasingProcess;
