(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8312: function(e, s, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return t(2603)
            }])
        },
        2603: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                __N_SSG: function() {
                    return w
                }
            });
            var l = t(5893),
                i = t(3244),
                r = t(1163);
            t(2120), t(1586);
            var a = t(5858),
                c = t(7294),
                n = t(1649),
                o = t(9047),
                d = t(5960),
                h = t(2166),
                m = t(5675),
                u = t.n(m);
            t(8180);
            var x = t(2068),
                p = t(2444),
                v = t(9403),
                g = t(824),
                j = t(9755),
                f = t.n(j),
                b = t(5852),
                N = t(5140);
            let y = e => {
                let {
                    subcategorisList: s,
                    bannerList: t
                } = e, m = (0, i.T)(), j = (0, r.useRouter)(), y = (0, n.v9)(e => e.baseStore.store);
                (0, n.v9)(e => e.user.isSidebarOpened);
                let w = (0, n.v9)(e => e.user.deviceType),
                    [_, I] = (0, c.useState)(""),
                    [S, E] = (0, c.useState)(N.Qe),
                    [T, k] = (0, c.useState)([]),
                    [R, O] = (0, c.useState)(0),
                    [L, C] = (0, c.useState)(s),
                    [W, M] = (0, c.useState)(s && s.length ? s[0].categories : []),
                    [P, q] = (0, c.useState)(""),
                    [A, F] = (0, c.useState)(""),
                    [D, $] = (0, c.useState)(""),
                    [G, H] = (0, c.useState)(""),
                    [Z, V] = (0, c.useState)(""),
                    [J, Y] = (0, c.useState)(""),
                    [B, z] = (0, c.useState)(N.Cx),
                    [X, U] = (0, c.useState)(N.pn),
                    [K, Q] = (0, c.useState)(N.GK),
                    [ee, es] = (0, c.useState)(N.RG),
                    et = (0, c.useRef)(null),
                    el = (0, c.useRef)(null),
                    ei = (0, c.useRef)(null),
                    er = (0, c.useRef)(null),
                    ea = (0, c.useRef)(null),
                    ec = (0, c.useRef)(null),
                    en = (0, c.useRef)(null),
                    eo = (0, c.useRef)(null),
                    ed = (0, c.useRef)(null),
                    eh = (0, c.useRef)(null);
                (0, c.useRef)(null);
                let em = (0, c.useRef)(null);
                a._n;
                var eu, ex = ["COACHING", "STUDY MATERIAL", "PRACTICE"],
                    ep = 0,
                    ev = 0,
                    eg = ex.length,
                    ej = !0,
                    ef = 0,
                    eb = function() {
                        setInterval(function() {
                            ej ? ev >= ex[ep].length && 5 == ++ef && (ej = !1, ef = 0) : 0 == ev && (ej = !0, ev = 0, ++ep >= eg && (ep = 0)), eu = ex[ep].substr(0, ev), 0 == ef && (ej ? ev++ : ev--), f()(".word").text(eu)
                        }, 100)
                    };
                (0, c.useEffect)(() => {
                    f()(document).ready(function() {
                        h.WZ.isHomeWordTriggered || (h.WZ.isHomeWordTriggered = !0, eb())
                    })
                }), (0, c.useEffect)(() => {
                    j.isReady && (D || $("https://api.whatsapp.com/send?text=" + window.location.href), y && y.blog_language && E(y.blog_language))
                }, [j.isReady, y]), (0, c.useEffect)(() => {
                    T && 0 == T.length && eN()
                }, [T]), (0, c.useEffect)(() => {
                    if (w) {
                        let e = new IntersectionObserver(e => {
                            e[0].isIntersecting && e[0].target.classList.add("is-visible")
                        }, {
                            threshold: 1
                        });
                        return et.current && e.observe(et.current), () => {
                            et.current && e.unobserve(et.current)
                        }
                    }
                }, [w, et]), (0, c.useEffect)(() => {
                    if (w) {
                        let e = new IntersectionObserver(e => {
                            e[0].isIntersecting && e[0].target.classList.add("is-visible")
                        }, {
                            threshold: 1
                        });
                        return el.current && e.observe(el.current), () => {
                            el.current && e.unobserve(el.current)
                        }
                    }
                }, [w, el]), (0, c.useEffect)(() => {
                    if (w) {
                        let e = new IntersectionObserver(e => {
                            e[0].isIntersecting && e[0].target.classList.add("is-visible")
                        }, {
                            threshold: 1
                        });
                        return ei.current && e.observe(ei.current), () => {
                            ei.current && e.unobserve(ei.current)
                        }
                    }
                }, [w, ei]), (0, c.useEffect)(() => {
                    if (w) {
                        let e = new IntersectionObserver(e => {
                            e[0].isIntersecting && e[0].target.classList.add("is-visible")
                        }, {
                            threshold: 1
                        });
                        return er.current && e.observe(er.current), () => {
                            er.current && e.unobserve(er.current)
                        }
                    }
                }, [w, er]), (0, c.useEffect)(() => {
                    if (w) {
                        let e = new IntersectionObserver(e => {
                            e[0].isIntersecting && e[0].target.classList.add("is-visible")
                        }, {
                            threshold: 1
                        });
                        return ea.current && e.observe(ea.current), () => {
                            ea.current && e.unobserve(ea.current)
                        }
                    }
                }, [w, ea]), (0, c.useEffect)(() => {
                    if (w) {
                        let e = new IntersectionObserver(e => {
                            e[0].isIntersecting && e[0].target.classList.add("is-visible")
                        }, {
                            threshold: 1
                        });
                        return ec.current && e.observe(ec.current), () => {
                            ec.current && e.unobserve(ec.current)
                        }
                    }
                }, [w, ec]), (0, c.useEffect)(() => {
                    if (w) {
                        let e = new IntersectionObserver(e => {
                            e[0].isIntersecting && e[0].target.classList.add("is-visible")
                        }, {
                            threshold: 1
                        });
                        return en.current && e.observe(en.current), () => {
                            en.current && e.unobserve(en.current)
                        }
                    }
                }, [w, en]), (0, c.useEffect)(() => {
                    if (w) {
                        let e = new IntersectionObserver(e => {
                            e[0].isIntersecting && e[0].target.classList.add("is-visible")
                        }, {
                            threshold: 1
                        });
                        return eo.current && e.observe(eo.current), () => {
                            eo.current && e.unobserve(eo.current)
                        }
                    }
                }, [w, eo]), (0, c.useEffect)(() => {
                    if (w) {
                        let e = new IntersectionObserver(e => {
                            e[0].isIntersecting && !h.WZ.isStudent && (h.WZ.isStudent = !0, ey("students", 0, 1e3, 10, "+", 10))
                        }, {
                            threshold: 1
                        });
                        return ed.current && e.observe(ed.current), () => {
                            ed.current && e.unobserve(ed.current)
                        }
                    }
                }, [w, ed]), (0, c.useEffect)(() => {
                    if (w) {
                        let e = new IntersectionObserver(e => {
                            e[0].isIntersecting && !h.WZ.isExperienced && (h.WZ.isExperienced = !0, ey("experienced", 0, 10, 1, "+", 20))
                        }, {
                            threshold: 1
                        });
                        return eh.current && e.observe(eh.current), () => {
                            eh.current && e.unobserve(eh.current)
                        }
                    }
                }, [w, eh]), (0, c.useEffect)(() => {
                    if (w) {
                        let e = new IntersectionObserver(e => {
                            e[0].isIntersecting && !h.WZ.isMentor && (h.WZ.isMentor = !0, ey("mentor", 0, 1e3, 10, "+", 10))
                        }, {
                            threshold: 1
                        });
                        return em.current && e.observe(em.current), () => {
                            em.current && e.unobserve(em.current)
                        }
                    }
                }, [w, em]);
                let eN = () => {
                        var e = [];
                        e.push({
                            label: "Blogs",
                            url: "/"
                        }), k(e)
                    },
                    ey = (e, s, t, l, i, r) => {
                        s + l <= t ? setTimeout(function() {
                            f()("." + e).text(s + i), ey(e, s += l, t, l, i, r)
                        }, r) : s <= t && setTimeout(function() {
                            f()("." + e).text(s + i), ey(e, ++s, t, l, i, r)
                        }, r)
                    },
                    ew = e => {
                        var s = {
                                name: G || "Main_Website_user",
                                mobile: J,
                                course: "",
                                subject: "",
                                customer_course_1: !1,
                                customer_course_2: !1,
                                customer_course_3: !1,
                                customer_course_4: !1,
                                customer_course_5: !1,
                                email: "",
                                message: Z || "",
                                customer_id: a.ym,
                                ssc: !1,
                                banking: !1,
                                others: !0,
                                wbpolice: !1,
                                wbcivilservices: !1
                            },
                            t = s;
                        let l = "";
                        s.ssc && (l = "ssc,", t.customer_course_1 = !0), s.banking && (l += "banking,", t.customer_course_2 = !0), s.wbpolice && (l += "wb police,", t.customer_course_3 = !0), s.wbcivilservices && (l += "wb civil services,", t.customer_course_4 = !0), s.others && (l += "others,", t.customer_course_5 = !0), s.course = l, s.subject = l, s.message = l, s.email = "mainwebsiteuser@gmail.com", s.customer_id = a.ym, fetch(a.Jp, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(s)
                        }).then(e => {
                            200 === e.status ? (Y(""), m((0, o.Lu)({
                                summary: "Success",
                                detail: "Your request has been submitted successfully",
                                severity: "success",
                                life: 3e3,
                                timeStamp: new Date().toString()
                            }))) : m((0, o.Lu)({
                                summary: "Error",
                                detail: "Couldn't submit the request now, Please try in sometime",
                                severity: "error",
                                life: 3e3,
                                timeStamp: new Date().toString()
                            }))
                        }).catch(e => {})
                    },
                    e_ = e => (0, l.jsx)("img", {
                        src: e.src,
                        alt: e.alt,
                        style: {
                            width: "100%",
                            display: "block"
                        }
                    }),
                    eI = e => w == d.q$ ? (0, l.jsx)("img", {
                        src: e.mobile_banner,
                        alt: e.alt,
                        style: {
                            width: "100%",
                            display: "block"
                        }
                    }) : (0, l.jsx)("img", {
                        src: e.banner,
                        alt: e.alt,
                        style: {
                            width: "100%",
                            display: "block"
                        }
                    }),
                    eS = e => (0, l.jsx)("div", {
                        className: "slide-story slide",
                        children: (0, l.jsxs)("div", {
                            className: "testimonial-outer-1",
                            children: [(0, l.jsx)("div", {
                                children: (0, l.jsxs)("div", {
                                    className: "row",
                                    children: [(0, l.jsx)("div", {
                                        className: "col-4",
                                        children: (0, l.jsx)("div", {
                                            className: "testimonial-box-image",
                                            children: (0, l.jsx)(u(), {
                                                src: e.image,
                                                alt: "testimonial",
                                                width: "80",
                                                height: "80",
                                                className: "testimonial-image-content",
                                                priority: !1
                                            })
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "col-8",
                                        children: (0, l.jsx)("div", {
                                            className: "testimonial-name",
                                            children: e.name
                                        })
                                    })]
                                })
                            }), (0, l.jsxs)("div", {
                                className: "testimonial-box-1",
                                children: [(0, l.jsxs)("div", {
                                    className: "row",
                                    children: [(0, l.jsx)("div", {
                                        className: "col-8",
                                        children: (0, l.jsx)("div", {
                                            className: "testimonial-position",
                                            children: e.position
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "col-4",
                                        children: (0, l.jsx)("div", {
                                            style: {
                                                color: "#F9CD6F"
                                            },
                                            children: e.year
                                        })
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "row",
                                    children: [(0, l.jsx)("div", {
                                        className: "col-8",
                                        children: (0, l.jsx)("div", {
                                            className: "testimonial-subtitle-2",
                                            children: e.subtitle
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "col-4",
                                        children: (0, l.jsx)("div", {
                                            className: "testimonial-subtitle-2",
                                            children: e.subtitle2
                                        })
                                    })]
                                })]
                            }), (0, l.jsx)("div", {
                                className: "testmonial-description",
                                children: e.description
                            })]
                        })
                    }),
                    eE = e => (0, l.jsxs)("div", {
                        className: "slide-story slide text-center",
                        children: [(0, l.jsx)("div", {
                            children: (0, l.jsx)(u(), {
                                src: e.image,
                                alt: "our team",
                                width: "150",
                                height: "200",
                                priority: !1
                            })
                        }), (0, l.jsx)("div", {
                            className: "f-b our-team-name pb-2 pt-2",
                            children: e.name
                        }), (0, l.jsx)("div", {
                            className: "f-b our-team-position pb-2",
                            children: e.position
                        }), (0, l.jsx)("div", {
                            className: "f-b our-team-qualification pb-2",
                            children: e.qualification
                        }), (0, l.jsx)("div", {
                            children: e.experience
                        }), (0, l.jsxs)("div", {
                            className: "our-team-description pt-2",
                            children: [(0, l.jsx)("strong", {
                                children: "“"
                            }), e.description, (0, l.jsx)("strong", {
                                children: "”"
                            })]
                        })]
                    }),
                    eT = e => {
                        M(e.categories)
                    };
                return (0, l.jsx)(l.Fragment, {
                    children: w && (0, l.jsxs)("div", {
                        children: [(0, l.jsx)("div", {
                            children: t && t.length > 0 && (0, l.jsx)(l.Fragment, {
                                children: (0, l.jsx)("div", {
                                    className: "row",
                                    children: (0, l.jsx)("div", {
                                        className: "col-12 col-md-12",
                                        children: (0, l.jsx)(x.d, {
                                            value: t,
                                            numVisible: 5,
                                            style: {
                                                width: "100%"
                                            },
                                            showThumbnails: !1,
                                            showItemNavigators: !0,
                                            circular: !0,
                                            autoPlay: !0,
                                            item: eI
                                        })
                                    })
                                })
                            })
                        }), (0, l.jsxs)("div", {
                            className: "container",
                            style: {
                                background: "#FAFAFA"
                            },
                            children: [(0, l.jsx)("div", {
                                className: "card banner-bottom-card b-w",
                                children: (0, l.jsxs)("div", {
                                    className: "row",
                                    children: [w != d.q$ && (0, l.jsx)("div", {
                                        className: "col-12 col-md-3 col-lg-3 m-auto",
                                        children: (0, l.jsx)(u(), {
                                            alt: a.cy,
                                            src: "/next_images/team/faculty_group_left.webp",
                                            width: "350",
                                            height: "350",
                                            style: {
                                                width: "100%",
                                                borderRadius: "34px",
                                                height: "auto"
                                            }
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "col-12 col-md-5 col-lg-5",
                                        children: (0, l.jsxs)("div", {
                                            className: "the-most-outer",
                                            children: [(0, l.jsx)("div", {
                                                className: "content-title font-gil-bold pb-3",
                                                children: "PERSONALISED "
                                            }), (0, l.jsx)("div", {
                                                className: "content-title-1 font-gil-bold word",
                                                style: {
                                                    color: "rgb(224 129 120)"
                                                }
                                            }), (0, l.jsx)("div", {
                                                className: "pt-3 form-mobile",
                                                children: (0, l.jsx)("span", {
                                                    className: "p-input-icon-left",
                                                    children: (0, l.jsxs)("div", {
                                                        className: "p-inputgroup",
                                                        children: [(0, l.jsx)(p.R, {
                                                            value: J,
                                                            onValueChange: e => Y(e.value),
                                                            prefix: "+91-",
                                                            placeholder: "Enter Mobile Number",
                                                            useGrouping: !1,
                                                            maxLength: 14
                                                        }), (0, l.jsx)(v.z, {
                                                            icon: "pi pi-chevron-right",
                                                            className: "p-button-warning",
                                                            onClick: ew
                                                        })]
                                                    })
                                                })
                                            }), (0, l.jsxs)("div", {
                                                className: "pt-3 pb-3",
                                                children: [a.my && (0, l.jsxs)("span", {
                                                    children: [" ", (0, l.jsx)("a", {
                                                        href: a.my,
                                                        target: "_blank",
                                                        children: (0, l.jsx)(u(), {
                                                            src: "/icons/social-media/google-play.svg",
                                                            alt: "playstore link",
                                                            height: 40,
                                                            width: 135
                                                        })
                                                    })]
                                                }), a.rJ && (0, l.jsxs)("span", {
                                                    children: [" ", (0, l.jsx)("a", {
                                                        href: a.rJ,
                                                        target: "_blank",
                                                        children: (0, l.jsx)(u(), {
                                                            src: "/icons/social-media/app-store.svg",
                                                            alt: "app store link",
                                                            height: 40,
                                                            width: 135
                                                        })
                                                    })]
                                                })]
                                            }), a.MI && a.MI.length > 0 && (0, l.jsx)("div", {
                                                className: "mt-1 mb-2",
                                                children: (0, l.jsxs)("a", {
                                                    href: "tel:" + a.MI[0].ISD + a.MI[0].PHONE,
                                                    target: "_blank",
                                                    style: {
                                                        textDecoration: "none"
                                                    },
                                                    children: [" ", (0, l.jsxs)("span", {
                                                        className: "flash-text",
                                                        children: [a.MI[0].ISD, "-", a.MI[0].PHONE]
                                                    })]
                                                })
                                            })]
                                        })
                                    }), w != d.q$ && (0, l.jsx)("div", {
                                        className: "col-12 col-md-3 col-lg-3 m-auto",
                                        children: (0, l.jsx)(u(), {
                                            alt: a.cy,
                                            src: "/next_images/team/faculty_group_right.webp",
                                            width: "350",
                                            height: "350",
                                            style: {
                                                width: "100%",
                                                borderRadius: "34px",
                                                height: "auto"
                                            }
                                        })
                                    })]
                                })
                            }), w == d.q$ && (0, l.jsx)("div", {
                                className: "mt-4",
                                children: (0, l.jsx)(u(), {
                                    alt: a.cy,
                                    src: "https://thedhronas.com/admin/assets/images/faculty_group.webp",
                                    width: "350",
                                    height: "350",
                                    style: {
                                        width: "100%",
                                        borderRadius: "34px",
                                        height: "auto"
                                    }
                                })
                            }), (0, l.jsxs)("div", {
                                className: "pt-5 pb-5 font-gil-bold",
                                children: [(0, l.jsx)("span", {
                                    className: "explore-exam",
                                    children: "Select your"
                                }), " ", (0, l.jsx)("span", {
                                    className: "explore-exam",
                                    style: {
                                        color: "#D92C1C"
                                    },
                                    children: "Goal/Exam"
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "row",
                                children: [(0, l.jsx)("div", {
                                    className: "col-12 col-md-3 col-lg-3",
                                    children: (0, l.jsxs)("div", {
                                        className: "card super-card",
                                        children: [w != d.q$ && L && L.length > 0 && L.map(e => (0, l.jsxs)("div", {
                                            className: "ml-2 cursor-pointer",
                                            style: {
                                                color: "#333333",
                                                fontWeight: "700",
                                                fontSize: "line-height",
                                                lineHeight: "19px",
                                                padding: "16px 20px 16px 14px"
                                            },
                                            onClick: () => eT(e),
                                            children: [(0, l.jsx)("span", {
                                                className: "pr-3 font-gil-medium",
                                                children: e.cat_name
                                            }), (0, l.jsx)("span", {
                                                style: {
                                                    float: "right"
                                                },
                                                children: (0, l.jsx)("i", {
                                                    className: "pi pi-chevron-right"
                                                })
                                            })]
                                        }, e.cat_id + "_cat_cards_laptop_parent")), w == d.q$ && (0, l.jsx)(b.f, {
                                            activeIndex: R,
                                            onTabChange: e => {
                                                eT(L[e.index]), O(e.index)
                                            },
                                            className: "cat-tabs",
                                            children: L && L.length > 0 && L.map(e => (0, l.jsx)(b.x, {
                                                header: e.cat_name
                                            }, e.cat_id + "_cat_cards_mobile_parent"))
                                        })]
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "col-12 col-md-9 col-lg-9",
                                    children: (0, l.jsx)("div", {
                                        className: "d-flex cat-cards",
                                        style: {
                                            flexWrap: "wrap"
                                        },
                                        children: W && W.length > 0 && W.map(e => (0, l.jsx)("div", {
                                            className: "card mr-2 super-card course-card",
                                            onClick: () => window.location.href = "/" + e.category_name + "-online-test-series",
                                            style: {
                                                cursor: "pointer"
                                            },
                                            children: (0, l.jsxs)("div", {
                                                className: "row",
                                                children: [(0, l.jsxs)("div", {
                                                    className: "col-12 p-4 pt-2",
                                                    children: [e.category_name && (0, l.jsx)("div", {
                                                        className: "card-course-heading font-gil-medium",
                                                        children: e.category_label
                                                    }), (0, l.jsx)("div", {
                                                        className: "card-course-text font-gil-medium",
                                                        children: "Batches"
                                                    })]
                                                }), (0, l.jsx)("div", {
                                                    className: "col-3",
                                                    children: (0, l.jsx)("div", {
                                                        className: "font-gil-medium card-course-explore pl-1",
                                                        children: "Explore"
                                                    })
                                                }), (0, l.jsx)("div", {
                                                    className: "col-9",
                                                    children: (0, l.jsx)(u(), {
                                                        src: a.X3,
                                                        alt: "Exam",
                                                        height: 100,
                                                        width: 100,
                                                        className: "mr-2",
                                                        style: {
                                                            height: "50px",
                                                            width: "auto",
                                                            margin: "auto"
                                                        }
                                                    })
                                                })]
                                            })
                                        }, e.id + "_cat_cards"))
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "india-students",
                            children: [(0, l.jsxs)("div", {
                                className: "pb-5",
                                children: [(0, l.jsx)("p", {
                                    className: "india-most font-gil-bold",
                                    children: "One Destination for Complete Exam Preparation"
                                }), (0, l.jsx)("p", {
                                    className: "india-sub-desc",
                                    children: "Learn, Practice, Improve & Succeed."
                                })]
                            }), (0, l.jsx)("div", {
                                children: (0, l.jsxs)("div", {
                                    className: "row",
                                    children: [(0, l.jsx)("div", {
                                        className: "col-12 col-md-3 col-lg-3",
                                        children: (0, l.jsxs)("div", {
                                            className: "preparation-title",
                                            children: [(0, l.jsx)("p", {
                                                style: {
                                                    color: "yellow"
                                                },
                                                children: "FEATURES"
                                            }), (0, l.jsx)("p", {
                                                children: (0, l.jsxs)("strong", {
                                                    className: "text-up",
                                                    children: [a.cy, " STRENGTH"]
                                                })
                                            })]
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "col-6 col-md-4 col-lg-3",
                                        children: (0, l.jsxs)("div", {
                                            children: [(0, l.jsx)(u(), {
                                                src: "https://thedhronas.com/admin/assets/images/medal.png",
                                                alt: a.cy,
                                                height: 50,
                                                width: 50,
                                                priority: !1
                                            }), (0, l.jsx)("p", {
                                                ref: ed,
                                                className: "students platform-title mb-0 mt-2",
                                                children: "0"
                                            }), (0, l.jsx)("p", {
                                                className: "platform-desc",
                                                children: "Happy Students"
                                            })]
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "col-6 col-md-3 col-lg-3",
                                        children: (0, l.jsxs)("div", {
                                            children: [(0, l.jsx)(u(), {
                                                src: "/next_images/others/teacher.png",
                                                alt: a.cy,
                                                height: 50,
                                                width: 50,
                                                priority: !1
                                            }), (0, l.jsx)("p", {
                                                ref: eh,
                                                className: "experienced platform-title mb-0 mt-2",
                                                children: "0"
                                            }), (0, l.jsx)("p", {
                                                className: "platform-desc",
                                                children: "Years Experienced Faculty"
                                            })]
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "col-6 col-md-3 col-lg-3",
                                        children: (0, l.jsxs)("div", {
                                            children: [(0, l.jsx)(u(), {
                                                src: "/next_images/others/search.png",
                                                alt: a.cy,
                                                height: 50,
                                                width: 50,
                                                priority: !1
                                            }), (0, l.jsx)("p", {
                                                ref: em,
                                                className: "mentor platform-title mb-0 mt-2",
                                                children: "0"
                                            }), (0, l.jsx)("p", {
                                                className: "platform-desc",
                                                children: "Mock Tests"
                                            })]
                                        })
                                    })]
                                })
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "container pt-5",
                            style: {
                                textAlign: "center"
                            },
                            children: [(0, l.jsxs)("div", {
                                className: "learn-text font-gil-bold",
                                children: [(0, l.jsx)("span", {
                                    children: "Learn From "
                                }), (0, l.jsx)("span", {
                                    className: "learn-custom",
                                    children: " The Best"
                                })]
                            }), (0, l.jsx)("div", {
                                className: "learn-text-desc pt-3",
                                children: "Explore the concepts with India’s most experienced Teachers!"
                            }), (0, l.jsx)("div", {
                                className: "pt-5",
                                children: (0, l.jsx)(x.d, {
                                    value: N.wY,
                                    showThumbnails: !1,
                                    showIndicators: !1,
                                    item: e_,
                                    circular: !0,
                                    autoPlay: !0
                                })
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "container",
                            style: {
                                textAlign: "center"
                            },
                            children: [(0, l.jsxs)("div", {
                                className: "pt-5",
                                children: [(0, l.jsxs)("p", {
                                    className: "learn-text font-gil-bold",
                                    children: ["Why ", a.Tu, "?"]
                                }), (0, l.jsx)("p", {
                                    className: "learn-text-desc",
                                    children: "Your Personalised Coach"
                                })]
                            }), (0, l.jsx)("div", {
                                className: "p-5",
                                children: (0, l.jsxs)("div", {
                                    className: "row",
                                    children: [(0, l.jsx)("div", {
                                        ref: et,
                                        className: "col-12 col-md-4 col-lg-3 learn-content-el-1",
                                        children: (0, l.jsx)("div", {
                                            className: "shadow-content",
                                            children: (0, l.jsx)(u(), {
                                                src: "icons/learn/img1.svg",
                                                alt: "Live",
                                                height: 220,
                                                width: 220,
                                                priority: !1
                                            })
                                        })
                                    }), (0, l.jsx)("div", {
                                        ref: el,
                                        className: "col-12 col-md-8 col-lg-9 learn-content-el-2",
                                        style: {
                                            textAlign: "left"
                                        },
                                        children: (0, l.jsxs)("div", {
                                            className: "shadow-content",
                                            children: [(0, l.jsx)("p", {
                                                className: "learn-sub-title font-gil-bold",
                                                children: "One to One Mentorship"
                                            }), (0, l.jsx)("p", {
                                                className: "learn-sub-desc font-fam-regular",
                                                children: "Learning is an important step for achieving dreams in a student’s journey. We encourage the student to explore the concept in depth instead of memorising. The Mentorship Sessions make sure that the student is left with no doubt."
                                            })]
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "col-12 col-md-12 col-lg-12",
                                        children: (0, l.jsx)(u(), {
                                            src: "icons/learn/img-seperator.svg",
                                            alt: "Live",
                                            height: 50,
                                            width: 350,
                                            style: {
                                                width: "100%"
                                            },
                                            priority: !1
                                        })
                                    }), (0, l.jsx)("div", {
                                        ref: ei,
                                        className: "col-12 col-md-8 col-lg-9 learn-content-el-3",
                                        children: (0, l.jsxs)("div", {
                                            className: "shadow-content",
                                            children: [(0, l.jsx)("p", {
                                                className: "learn-sub-title font-gil-bold",
                                                children: "Daily Practice Sessions"
                                            }), (0, l.jsx)("p", {
                                                className: "learn-sub-desc font-fam-regular",
                                                children: "We believe in the philosophy that “practice makes a man perfect” and so does our curriculum follow the same ideology.  Our tech enabled platform is tailored for providing the best analysis to the students."
                                            })]
                                        })
                                    }), (0, l.jsx)("div", {
                                        ref: er,
                                        className: "col-12 col-md-4 col-lg-3 learn-content-el-4",
                                        style: {
                                            textAlign: "left"
                                        },
                                        children: (0, l.jsx)("div", {
                                            className: "shadow-content",
                                            children: (0, l.jsx)(u(), {
                                                src: "icons/learn/img1.svg",
                                                alt: "Live",
                                                height: 220,
                                                width: 220,
                                                priority: !1
                                            })
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "col-12 col-md-12 col-lg-12",
                                        children: (0, l.jsx)(u(), {
                                            src: "icons/learn/img-seperator.svg",
                                            alt: "Live",
                                            height: 50,
                                            width: 350,
                                            style: {
                                                width: "100%"
                                            },
                                            priority: !1
                                        })
                                    }), (0, l.jsx)("div", {
                                        ref: ea,
                                        className: "col-12 col-md-4 col-lg-3 learn-content-el-5",
                                        children: (0, l.jsx)("div", {
                                            className: "shadow-content",
                                            children: (0, l.jsx)(u(), {
                                                src: "icons/learn/img1.svg",
                                                alt: "Live",
                                                height: 220,
                                                width: 220,
                                                priority: !1
                                            })
                                        })
                                    }), (0, l.jsx)("div", {
                                        ref: ec,
                                        className: "col-12 col-md-8 col-lg-9 learn-content-el-6",
                                        style: {
                                            textAlign: "left"
                                        },
                                        children: (0, l.jsxs)("div", {
                                            className: "shadow-content",
                                            children: [(0, l.jsx)("p", {
                                                className: "learn-sub-title font-gil-bold",
                                                children: "Personalised Study Material"
                                            }), (0, l.jsx)("p", {
                                                className: "learn-sub-desc font-fam-regular",
                                                children: "We provide study material that is fit for every student. Providing same material to every student doesn’t provide good results and our’s study material is really optimised for the students at different level of preparation."
                                            })]
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "col-12 col-md-12 col-lg-12",
                                        children: (0, l.jsx)(u(), {
                                            src: "icons/learn/img-seperator.svg",
                                            alt: "Live",
                                            height: 50,
                                            width: 350,
                                            style: {
                                                width: "100%"
                                            },
                                            priority: !1
                                        })
                                    }), (0, l.jsx)("div", {
                                        ref: en,
                                        className: "col-12 col-md-8 col-lg-9 learn-content-el-7",
                                        children: (0, l.jsxs)("div", {
                                            className: "shadow-content",
                                            children: [(0, l.jsx)("p", {
                                                className: "learn-sub-title font-gil-bold",
                                                children: "Weekly Sessions"
                                            }), (0, l.jsx)("p", {
                                                className: "learn-sub-desc font-fam-regular",
                                                children: "Interacting with students is must for the grooming and we interact with them on a weekly basis so that they can be motivated throughout the journey."
                                            })]
                                        })
                                    }), (0, l.jsx)("div", {
                                        ref: eo,
                                        className: "col-12 col-md-4 col-lg-3 learn-content-el-8",
                                        style: {
                                            textAlign: "left"
                                        },
                                        children: (0, l.jsx)("div", {
                                            className: "shadow-content",
                                            children: (0, l.jsx)(u(), {
                                                src: "icons/learn/img1.svg",
                                                alt: "Live",
                                                height: 220,
                                                width: 220,
                                                priority: !1
                                            })
                                        })
                                    })]
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            className: "container",
                            children: (0, l.jsx)(x.d, {
                                value: N.Z5,
                                showThumbnails: !1,
                                showIndicators: !1,
                                item: e_,
                                circular: !0,
                                autoPlay: !0
                            })
                        }), (0, l.jsxs)("div", {
                            className: "container pt-5",
                            children: [(0, l.jsx)("p", {
                                className: "text-center font-gil-bold learn-text",
                                children: "Our Team is the right team for you"
                            }), (0, l.jsxs)("div", {
                                children: [w != d.q$ && (0, l.jsx)(g.l, {
                                    value: B,
                                    numVisible: 3,
                                    numScroll: 1,
                                    className: "custom-carousel",
                                    circular: !0,
                                    autoplayInterval: 5e3,
                                    showIndicators: !1,
                                    itemTemplate: eE
                                }), w == d.q$ && (0, l.jsx)(g.l, {
                                    value: B,
                                    numVisible: 1,
                                    numScroll: 1,
                                    className: "custom-carousel",
                                    circular: !0,
                                    autoplayInterval: 4e3,
                                    showIndicators: !1,
                                    itemTemplate: eE
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "container pt-5",
                            children: [(0, l.jsx)("p", {
                                className: "testimonial-title font-gil-bold",
                                children: "Testimonials"
                            }), (0, l.jsxs)("p", {
                                className: "pb-4 font-gil-bold",
                                children: [(0, l.jsx)("span", {
                                    className: "learn-text",
                                    children: "Hear It From "
                                }), (0, l.jsx)("span", {
                                    className: "learn-text",
                                    children: "The Masters"
                                })]
                            }), (0, l.jsxs)("div", {
                                children: [w != d.q$ && (0, l.jsx)(g.l, {
                                    value: X,
                                    numVisible: 3,
                                    numScroll: 1,
                                    className: "custom-carousel",
                                    showIndicators: !1,
                                    circular: !0,
                                    autoplayInterval: 5e3,
                                    itemTemplate: eS
                                }), w == d.q$ && (0, l.jsx)(g.l, {
                                    value: X,
                                    numVisible: 1,
                                    numScroll: 1,
                                    className: "custom-carousel",
                                    showIndicators: !1,
                                    circular: !0,
                                    autoplayInterval: 4e3,
                                    itemTemplate: eS
                                })]
                            })]
                        }), (0, l.jsx)("div", {
                            className: "container",
                            children: (0, l.jsx)("div", {
                                className: "card footer-bottom-card",
                                children: (0, l.jsxs)("div", {
                                    className: "row",
                                    children: [(0, l.jsx)("div", {
                                        className: "col-12 col-md-6 col-lg-6",
                                        children: (0, l.jsxs)("div", {
                                            className: "the-most-outer",
                                            children: [(0, l.jsx)("span", {
                                                className: "content-title font-gil-bold",
                                                children: "Get Access To Our "
                                            }), (0, l.jsx)("div", {
                                                className: "content-title font-gil-bold",
                                                children: "Free Batches Now"
                                            }), (0, l.jsx)("div", {
                                                className: "pt-3",
                                                children: "Get instant access to high-quality material"
                                            }), (0, l.jsx)("div", {
                                                className: "pt-3 form-mobile",
                                                children: (0, l.jsx)("span", {
                                                    className: "p-input-icon-left",
                                                    children: (0, l.jsxs)("div", {
                                                        className: "p-inputgroup",
                                                        children: [(0, l.jsx)(p.R, {
                                                            value: J,
                                                            onValueChange: e => Y(e.value),
                                                            prefix: "+91-",
                                                            placeholder: "Enter Mobile Number",
                                                            useGrouping: !1,
                                                            maxLength: 14
                                                        }), (0, l.jsx)(v.z, {
                                                            icon: "pi pi-chevron-right",
                                                            className: "p-button-warning",
                                                            onClick: ew
                                                        })]
                                                    })
                                                })
                                            }), (0, l.jsxs)("div", {
                                                className: "pt-3 pb-3",
                                                children: [a.my && (0, l.jsxs)("span", {
                                                    children: [" ", (0, l.jsx)("a", {
                                                        href: a.my,
                                                        target: "_blank",
                                                        children: (0, l.jsx)(u(), {
                                                            src: "/icons/social-media/google-play.svg",
                                                            alt: "playstore link",
                                                            height: 40,
                                                            width: 135,
                                                            priority: !1
                                                        })
                                                    })]
                                                }), a.rJ && (0, l.jsxs)("span", {
                                                    children: [" ", (0, l.jsx)("a", {
                                                        href: a.rJ,
                                                        target: "_blank",
                                                        children: (0, l.jsx)(u(), {
                                                            src: "/icons/social-media/app-store.svg",
                                                            alt: "app store link",
                                                            height: 40,
                                                            width: 135,
                                                            priority: !1
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })
                                    }), w != d.q$ && (0, l.jsx)("div", {
                                        className: "col-12 col-md-6 col-lg-6 m-auto",
                                        children: (0, l.jsx)(u(), {
                                            alt: a.cy,
                                            src: "https://thedhronas.com/admin/assets/images/faculty_group.webp",
                                            width: "350",
                                            height: "350",
                                            style: {
                                                width: "100%",
                                                borderRadius: "34px",
                                                height: "auto"
                                            },
                                            priority: !1
                                        })
                                    })]
                                })
                            })
                        })]
                    })
                })
            };
            var w = !0;
            s.default = y
        }
    },
    function(e) {
        e.O(0, [571, 68, 509, 774, 888, 179], function() {
            return e(e.s = 8312)
        }), _N_E = e.O()
    }
]);