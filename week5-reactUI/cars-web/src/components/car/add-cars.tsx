export default function AddCar() {
  return (
    <>
      <form>
        <div>
          <label>Name: </label>
          <input type="text" />
        </div>

        <div>
          <label>Description: </label>
          <input type="text" />
        </div>
        <div>
          <label>DOM: </label>
          <input type="text" />
        </div>
        <div>
          <label>Fuel: </label>
          <input type="text" />
        </div>
      </form>
      <input type="button" value="Back" />
      <input type="submit" value="Add Car" />
    </>
  );
}
