import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data:", formData);

    setLoading(true);
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form key={2} onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
          required
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign up"}
        </button>
        <button
          onClick={() => alert("Poka eta ne rabotaet 😶‍🌫️")}
          className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          Continue with google
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p className="">Have an account ?</p>
        <Link to={"/signup"}>
          <span className="text-blue-700">Sign up</span>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
