export default function Devices() {
  const device = {
    name:"Device 1",
    
    
  };

  return (
    <div id="contact">
      <div>
        <h1>
          {device.name ? (
            <>
              {device.name}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          </h1>
      </div>
    </div>
  );
}