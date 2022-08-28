import express from "express";
import {
  paginaInicio,
  paginaNosotros,
  paginaViajero,
  paginaTestimoniales,
  paginaDetalleViaje,
} from "../controllers/paginasControllers.js";

import { guardarTestimonial } from "../controllers/testimonialController.js";

const router = express.Router();

router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajero);

router.get("/viajes/:slug", paginaDetalleViaje);

router.get("/testimoniales", paginaTestimoniales);

router.post("/testimoniales", guardarTestimonial);

export default router;
