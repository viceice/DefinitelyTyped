import feathersExpress, * as express from "@feathersjs/express";
import feathers, { Application } from "@feathersjs/feathers";

const app = feathersExpress(feathers());

const feathersServiceDummy = {
    get: () => {
        return Promise.resolve({});
    },
    find: () => {
        return Promise.resolve([{}, {}]);
    },
};
const expressMiddlewareDummy = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    next();
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static("./public"));
app.use("/", expressMiddlewareDummy, feathersServiceDummy);
app.configure(express.rest());
app.use(express.notFound());
app.use(express.errorHandler({ logger: console }));
