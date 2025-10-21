const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

//API_DOMAIN will not be available until project is deployed and its not going to deploy correctly
// if it cant fetch properties for home page so adding null here, so while deploying it doesnt throw error.
// so then we can go to the server and update this domain to the domain we need.
//fetch all properties
const fetchProperties = async (request) => {
  try {
    if(!apiDomain) {
        return [];
    }

    // adding http://localhost:3000 coz this is being done in server
    //cache: "no-store" added properties will be visible without hard refresh
    const res = await fetch(`${apiDomain}/properties`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

//fetch single property
const fetchProperty = async (id) => {
  try {
    if(!apiDomain) {
        return null;
    }

    // adding http://localhost:3000 coz this is being done in server
    const res = await fetch(`${apiDomain}/properties/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { fetchProperties, fetchProperty };