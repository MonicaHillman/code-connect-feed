import "./styles.css"
export default function Codigo({ children }) {
    return (
        <div className="container__codigo">
            <h2>Código</h2>
            <pre className="codigo">
                <code>{children}</code>
            </pre>
        </div>
    );
}