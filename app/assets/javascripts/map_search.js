const { useState } = React;

function RecycleSearchApp() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    setResults([
      { name: "さいたま市 消火器回収センター", phone: "048-000-0000" },
      { name: "埼玉リサイクル窓口", phone: "048-111-1111" }
    ]);
  };

  return (
    React.createElement("div", { style: { maxWidth: "700px", margin: "40px auto", fontFamily: "sans-serif" } },
      React.createElement("h2", null, "消火器リサイクル窓口検索"),

      React.createElement("input", {
        placeholder: "市区町村を入力",
        value: query,
        onChange: e => setQuery(e.target.value),
        style: { width: "100%", padding: "10px", marginBottom: "12px" }
      }),

      React.createElement("button", { onClick: handleSearch }, "検索"),

      React.createElement("ul", null,
        results.map((r, i) =>
          React.createElement("li", { key: i },
            `${r.name}（${r.phone}）`
          )
        )
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById("react-root")).render(
  React.createElement(RecycleSearchApp)
);
