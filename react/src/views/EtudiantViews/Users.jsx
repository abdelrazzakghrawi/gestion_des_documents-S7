import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useStateContext } from "../../contexts/Context";

const Users = () => {
    const { user } = useStateContext();

    return (
        <div style={{ margin: '20px' }}>
            <h1>Informations de leleve</h1>
            {user ? (
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary">Nom : {user.name}</Typography>
                        <Typography color="textSecondary">Email : {user.email}</Typography>
                        <Typography color="textSecondary">Rôle : {user.role}</Typography>
                    </CardContent>
                </Card>
            ) : (
                <Typography color="error">Aucun utilisateur connecté</Typography>
            )}
        </div>
    );
};

export default Users;
