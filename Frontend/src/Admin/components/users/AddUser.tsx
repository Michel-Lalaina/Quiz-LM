import { useEffect, useState } from "react";
import { getUsers, createUser, updateUser, deleteUser } from "../../services/apiUser";

interface User {
    id: number;
    nom: string;
    email: string;
}

export const AddUser = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [editingId, setEditingId] = useState<number | null>(null);

    // Charger les utilisateurs
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const data = await getUsers();
        setUsers(data);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (editingId) {
            await updateUser(editingId, nom, email);
            setEditingId(null);
        } else {
            await createUser(nom, email);
        }
        setNom("");
        setEmail("");
        fetchUsers();
    };

    const handleEdit = (user: User) => {
        setEditingId(user.id);
        setNom(user.nom);
        setEmail(user.email);
    };

    const handleDelete = async (id: number) => {
        await deleteUser(id);
        fetchUsers();
    };

    return (
        <div className="w-1/2 mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
            <div className="w-full">
            <h1 className="text-xl font-bold mb-4">Gestion des Utilisateurs</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    placeholder="Nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    className="border p-2 w-full mb-2"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 w-full mb-2"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded w-full">
                    {editingId ? "Modifier" : "Ajouter"}
                </button>
            </form>
            <ul>
                {users.map((user) => (
                    <li key={user.id} className="flex justify-between items-center border-b py-2">
                        <span>
                            {user.nom} - {user.email}
                        </span>
                        <div>
                            <button
                                onClick={() => handleEdit(user)}
                                className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">
                                ✏️
                            </button>
                            <button
                                onClick={() => handleDelete(user.id)}
                                className="bg-red-500 text-white px-2 py-1 rounded">
                                🗑️
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
};


