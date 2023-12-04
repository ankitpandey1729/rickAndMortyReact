export const Character = ({ results }) => {
  let display;
  console.log(results);
  if (results) {
    display = results.map((x) => {
      let { id, image, name, status, location } = x;

      return (
        <div key={id}>
          <img src={image} alt="" />
          <div>
            <div>Name : {name}</div>
            <div>
              <div>Last Location : {location.name}</div>
            </div>
            <div>
              <div>Status : {status}</div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};
