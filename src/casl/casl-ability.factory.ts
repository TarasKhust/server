import {Ability, AbilityBuilder, AbilityClass} from "@casl/ability";
import {Action} from "./Action";
import { Article } from "./Article"
import {Injectable} from "@nestjs/common";

type Subjects = typeof Article | typeof User | Article | User | 'all';

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
    createForUser(user: User) {
        const { can, cannot, build } = new AbilityBuilder<
            Ability<[Action, Subjects]>
            >(Ability as AbilityClass<AppAbility>);

        if (user.isAdmin) {
            can(Action.Manage, 'all'); // read-write access to everything
        } else {
            can(Action.Read, 'all'); // read-only access to everything
        }

        // @ts-ignore
        can(Action.Update, Article, { authorId: user.id });
        cannot(Action.Delete, Article, { isPublished: true });

        return build();
    }
}