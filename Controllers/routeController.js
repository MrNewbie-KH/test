const RouteModel = require('../Models/routeModel');

// Rota listeleme
exports.listRoutes = (req, res) => {
    RouteModel.getAllRoutes((error, routes) => {
        if (error) {
            res.status(500).send({
                message: "Error retrieving routes"
            });
        } else {
            res.send(routes);
        }
    });
};

// Yeni rota oluşturma
exports.createRoute = (req, res) => {
    const { name, description, photo, city } = req.body;

    if (!name) {
        return res.status(400).send({
            message: "Route name cannot be empty!"
        });
    }

    const newRoute = {
        name,
        description,
        photo,
        city
    };

    RouteModel.createRoute(newRoute, (error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Some error occurred while creating the Route."
            });
        } else {
            res.send(data);
        }
    });
};

exports.updateRoute = (req, res) => {
    const { id } = req.params;
    const { name, description, photo, city } = req.body;

    if (!name) {
        return res.status(400).send({
            message: "Route name cannot be empty!"
        });
    }

    const updatedRoute = {
        id,
        name,
        description,
        photo,
        city
    };

    RouteModel.updateRoute(updatedRoute, (error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Some error occurred while updating the Route."
            });
        } else {
            res.send(data);
        }
    });
};

// Rota silme
exports.deleteRoute = (req, res) => {
    const { id } = req.params;

    RouteModel.deleteRoute(id, (error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Some error occurred while deleting the Route."
            });
        } else {
            res.send({ message: "Route deleted successfully!" });
        }
    });
};