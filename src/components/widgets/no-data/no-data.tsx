function NoData() {
  return (
    <tr className="w-[100vw]">
      <td colSpan={3} className="p-2 w-full text-lg bg-white text-center">
        No Data found
      </td>
      <td className="w-1/2 bg-white">&nbsp;</td>
    </tr>
  );
}

export default NoData;
