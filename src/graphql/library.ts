import {enumType, extendType, interfaceType, objectType} from "nexus"
import {Person} from "./person"
import {DistributedLibrary, ILibrary, ILibraryRepository, SimpleLibrary} from "@meansofproduction/domain"
import {Location} from "./location"


export const LocationType = enumType({
    name: "LocationTypeEnum",
    members: ["Physical", "Distributed", "Virtual"]
})

export const Library = interfaceType({
    name: "Library",
    definition(t) {
        t.nonNull.string("id")
        t.nonNull.string("name")
        t.nonNull.field("administrator", {
            type: Person
        })
        t.nonNull.field("location", {type: Location})
    },
    resolveType(entity: ILibrary){
        return (entity instanceof DistributedLibrary) ? "DistributedLibrary":
            (entity instanceof  SimpleLibrary) ? "SimpleLibrary": ""
    }
})


export const SimpleLibraryObj = objectType({
    name: "SimpleLibrary",
    definition(t) {
        t.implements("Library")
    }
})

export const DistributedLibraryObj = objectType({
    name: "DistributedLibrary",
    definition(t) {
        t.implements("Library")
    },
})

export const LibrariesQuery = extendType({
    type: "Query",
    definition(t){
        t.nonNull.list.nonNull.field("libraries", {
            type: "Library",
            resolve(parent, args, context, info) {
                const libraryRepository: ILibraryRepository = context.libraryRepository
                return libraryRepository.getAll()
            }
        })
    }
})