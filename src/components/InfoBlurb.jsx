const InfoBlurb = () => {
  return (
    <div className="pt-6 pr-4  h-[calc(90vh_-_10rem)] text-slate-100 text-xl ml-6 mt-6 leading-10 " id="editList">
      <p class="w-2/3 mb-4 italic">Alap Editor 1.0 (React version) - March 2022</p>
      <p class="w-2/3 mb-4 italic">
        How to edit items for alap-enabled links? This is a Proof of Concept. More background at{' '}
        <a target="fromAlap" className="hover:underline" href="https://alap.info/">
          alap.info
        </a>
      </p>
      <p class="w-2/3 mb-4">Drag and Drop a link from another browser window here, or click on the Add button above.</p>
      <p class="w-2/3 mb-4">To edit existing items, click on them in the list to the left. Use the filter field on top to narrow down the list. You can clone existing items.</p>
      <p class="w-2/3 mb-4 italic">Note: This DEMO does not save to a database. You can test updates during a session.</p>
    </div>
  );
};

export default InfoBlurb;
