export default class Memberships {
    boolean(x, y) {
        let member = (x <= y) ? 0 : 1;
        return member;
    }

    booleanInverted(x, y) {
        let member = (x < y) ? 1 : 0;
        return member;
    }

    grade(x, y, z) {
        let member = 0;
        if (x <= y) {
            member = 0;
        } else {
            if(x > y && x < z){
                member = (x/(z-y))-(y/(z-y));
            }else{
                if(x>= z){
                    member = 1;
                }
            }
        }
        return member;
    }

    gradeInverted(x, y, z) {
        let member = 0;
        if (x <= y) {
            member = 1;
        } else {
            if(x > y && x < z){
                member = (x/(z-y))-(z/(z-y));
            }else{
                if(x>= z){
                    member = 0;
                }
            }
        }
        return member;
    }

    triangle(x, a, b, c){
        let member = 0;
        if(x <= a) {
            member = 0;
        }else{
            if (x > a && x <= b) {
                member = (x/(b-a)) - (a/(b-a));
            }else{
                if (x > b && x <= c) {
                    member = - (x/(c-b)) + (c/(c-b));
                } else {
                    if (x>c) {
                        member = 0;
                    }
                }
            }
        }
        return member;
    }

    trapezoid(x, a, b, c, d){
        let member = 0;
        if(x <= a) {
            member = 0;
        }else{
            if (x > a && x <= b) {
                member = (x/(b-a)) - (a/(b-a));
            }else{
                if (x > b && x <= c) {
                    member = 1;
                } else {
                    if (x>c && x <= d) {
                        member = - (x/(d-c)) + (d/(d-c))
                    } else {
                        if (x>d) {
                            member = 0;
                        }
                    }
                }
            }
        }
        return member;
    }

    operatorAND(a, b){
        return Math.min(a, b);
    }

    operatorOR(a, b){
        return Math.max(a, b);
    }

    operatorNOT(a){
        return 1-a;
    }
}